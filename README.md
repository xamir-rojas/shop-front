# Shop-front

The current version of the shop_front is running in : https://demo-shop-front.herokuapp.com/
**new users must verify themselves in their email address**

Shop frontend made with ReactJS and TailwindCSS
Connected with the user system of AWS Cognito and the demo_shop API Gateway
https://github.com/possibilitycompany/demo_shop

# v1

The first release adds:

- RouteWithLayout: Component that allows show the pages with different layouts depending on whether the user is logged in or not
- put_products: with 2 new lines allows the user to update the information about a product but not the product name
- Overflow: the styles of errors and products were changed to avoid overflow of their texts.

## Note about the update of products

- In the demo_shop API instructions file the update instruction doesn't specify that is not possible to update the name of the product, it's important to include this specification since it only mentions that the API user just needs to include column and value to update in featuresPair and include the name column generates an error because **name** is a reserved word by DynamoDB

### Implemented solution

As mentioned Above, in order to avoid the Update error is it necessary to delete the name attribute from the data after use the name in the body to specify which product update.

```js
const name = data.name;
delete params.name;
console.log(params);
var url = new URL(
  "./put_product",
  "https://if8prmb4yi.execute-api.us-east-1.amazonaws.com/Prod/"
);
const response = await fetch(url, {
  method: "PUT",
  headers: headers,
  body: JSON.stringify({
    name: name,
    featuresPair: params,
  }),
});
```

### Recommendation: Change the endpoints

Since the GET, POST, PUT and DELETE operations are in charge of determine the kind of request the user is making, it's not necessary to mention the operation in the endpoints name.
For the API user is most comfortable to use the ID or key of the product in the URL to specify the product

For example:

- use the operation GET in the `/products` endpoint instead of use the operation GET in `/fetch_products`
- use the operation GET in the `/products/<product-key>` endpoint instead of use the operation GET in `/fetch_product?name=<product-name>`
- use the operation PUT in the `/products/<product-key>` endpoint instead of using the operation PUT in `/put_product`
- use the operation POST in the `/products` endpoint instead of using the operation POST in `/post_product?name=<product-name&&...`

This along with sending all the data in the body of the request allows for a more organic behaviour of the API towards its user.
