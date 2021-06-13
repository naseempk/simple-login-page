$(document).ready(function(){
    $("#frm").validate({
        rules:{
            txtname:{
                required:true,
                minlength:4,
                maxlength:12

            },
            pswd:{
                required:true,
                minlength:8,
                maxlength:12
            },
            confrmpswd:{
                required:true,
                minlength:8,
                maxlength:12,
                equalTo:"#security"
            }
        },
        messages:{
            txtname:{
                required:"Please Provide an UserName",
                minlength:"Your  UserName Must Be At Least 4 Characters Long",
                maxlength:"Your  UserName Must Be Less Than 12 Characters"
            },
            pswd:{
                required:"Please Provide A Password",
                minlength:"Your  Password Must Be At Least 8 Characters Long",
                maxlength:"Your  Password Must Be Less Than 12 Characters"
            },
            confrmpswd:{
                required:"Please Enter Your Password Again",
                minlength:"Your  Password Must Be At Least 8 Characters Long",
                equalTo:"Your Password Must Be Equal To Entered Password ",
                maxlength:"Your  Password Must Be Less Than 12 Characters"
            }
        }

       

    })
})