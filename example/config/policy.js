export const samplePolicy = () => {
   const policy =  {

      "Version": "2012-10-17" ,

      "Statement": [

          {

              "Effect": "Allow",

              "Action": "s3:ListBucket",

              "Resource": "arn:aws-cn:s3:::tvm-examplebucket-jim"

          },

          {

              "Effect": "Allow",

              "Action": [

                  "s3:GetObject",

                  "s3:PutObject",

                  "s3:DeleteObject"

              ],

              "Resource": "arn:aws-cn:s3:::tvm-examplebucket-jim/*"

          }

      ]

  };
  return JSON.stringify(policy);
};
