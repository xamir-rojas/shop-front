import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
    ClientId: "3unsnaq2372t4pi95h8kle1dhf",
    UserPoolId: "us-east-2_EwgRcRgUs",
  };
  
export default new CognitoUserPool(poolData);