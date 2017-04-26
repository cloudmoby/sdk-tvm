const AWS = require('aws-sdk');
module.exports = class TVM {
  constructor(params) {
    if(!params) {
      throw new Error("params is invalid");
    }
    if(!params.accessKeyId || !params.secretAccessKey) {
      throw new Error("Missing required key 'accessKeyId/secretAccessKey' in params");
    }
    if (!params.RoleArn) {
      throw new Error("Missing required key 'RoleArn' in params");
    }
    if (!params.RoleSessionName) {
      throw new Error("Missing required key 'RoleSessionName' in params");
    }

    this.stsParams = {
      RoleArn: params.RoleArn,
      RoleSessionName: params.RoleSessionName,
      Policy: params.Policy,
      DurationSeconds: params.DurationSeconds,
      ExternalId: params.ExternalId,
      SerialNumber: params.SerialNumber,
      TokenCode: params.TokenCode
    };

    this.sts = new AWS.STS({
      accessKeyId: params.accessKeyId,
      secretAccessKey: params.secretAccessKey
    });
  }

  getTemporaryCredentials() {
    const sts = this.sts;
    const params = this.stsParams;
    return new Promise(function (resolve, reject) {
      return sts.assumeRole(params, function(err, data) {
        resolve({
          error: err,
          data: data
        });
      });
    });
  }
}
