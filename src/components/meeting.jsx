// import React,{useEffect, fragment} from "react";

// const Meeting = ({payload}) => {
//     useEffect(async ()=>{
//         const {ZoomMtg} = await import("@zoomus/websdk");
//         ZoomMtg.setZoomJSLib('https://source.zoom.us/lib','/av');
//         ZoomMtg.preLoadWasm();
//         ZoomMtg.prepareWebSDK();
//         ZoomMtg.generateSDKSignature({
//             meetingNumber:payload.meetingNumber,
//             role:payload.role,
//             sdkKey:payload.sdkKey,
//             sdkSecret:payload.sdkSecret,
//             success:function(signature)
//             {
//                 ZoomMtg.init({
//                     leaveUrl:payload.leaveUrl,
//                     success:function(data)
//                     {
//                         ZoomMtg.join({
//                             meetingNumber:payload.meetingNumber,
//                             signature:signature.result,
//                             userName:payload.userName,
//                             userEmail:payload.userEmail,
//                             passWord:payload.passWord,
//                             tk:'',
//                             success:function(){
//                                 console.log("Joined");
//                             },
//                             error:function(error)
//                             {
//                                 console.log(error);
//                             }
//                         })
//                     },
//                     error:function(error)
//                     {
//                         console.log(error);
//                     }
//                 })
//             },
//             error:function(error)
//             {
//                 console.log(error);
//             }
//         })
//     },[])

//     return(<h1>Meeting will be here</h1>)
// }

// export default Meeting;

import React, { useEffect } from "react";

const Meeting = ({ payload }) => {
  
  useEffect(() => {
    const loadZoomMtg = async () => {
      try {
        const { ZoomMtg } = await import("@zoomus/websdk");
        ZoomMtg.setZoomJSLib('https://source.zoom.us/2.18.3/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();

        ZoomMtg.generateSDKSignature({
          meetingNumber: payload.meetingNumber,
          role: payload.role,
          sdkKey: payload.sdkKey,
          sdkSecret: payload.sdkSecret,
          success: function (signature) {
            ZoomMtg.init({
              leaveUrl: payload.leaveUrl,
              success: function (data) {
                ZoomMtg.join({
                  meetingNumber: payload.meetingNumber,
                  signature: signature.result,
                  userName: payload.userName,
                  userEmail: payload.userEmail,
                  passWord: payload.passWord,
                  tk: '',
                  success: function () {
                    console.log("Joined");
                  },
                  error: function (error) {
                    console.log(error);
                  }
                });
              },
              error: function (error) {
                console.log(error);
              }
            });
          },
          error: function (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.error("Failed to load ZoomMtg", error);
      }
    };

    loadZoomMtg();
  }, [payload]);

  return (<h1>Meeting will be here</h1>);
};

export default Meeting;
