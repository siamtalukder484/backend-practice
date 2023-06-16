const otptemplate = (otp) => {

    return`
        <div>
            <div>
                <h2>Please verify your account</h2>
                <p>Thank you</p>
                <h1 style="padding: 8px 30px;
                border-radius: 8px;
                background-color: #000;
                color: #fff;
                font-size: 25px;
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                -ms-border-radius: 8px;
                -o-border-radius: 8px;
                display: inline-block;" >
                    ${otp}
                </h1>
            </div>
        </div>
        
    `
};

module.exports = otptemplate