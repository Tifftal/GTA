import React from 'react';
import './footer.css'

const Footer = () => {
    return (       
        <div className='footer'>
            <div className='socials'>
                <h1>Мы в социальных сетях</h1>
                <div className='socBtn'>
                    {/* <div className="social-icon-whatsapp">
                        <a href="https://api.whatsapp.com/send?phone=79296740506"><img src="../IMG/free-icon-whatsapp-3670302.png" width="100%" height="100%" /></a>
                    </div>
                    <div className="social-icon-vk">
                        <a href="https://vk.com/yourmurkysoulmate"><img src="../IMG/free-icon-vkontakte-4494490.png" width="100%" height="100%" /></a>
                    </div>
                    <div className="social-icon-telegram">
                        <a href="https://t.me/yourmurkysoulmate"><img src="../IMG/free-icon-telegram-2111710.png" width="100%" height="100%" /></a>
                    </div>
                    <div className="social-icon-instagram" >
                        <a href="https://instagram.com/euphoria_kv?igshid=YmMyMTA2M2Y="><img src="../IMG/free-icon-instagram-1384015.png" width="100%" height="100%" /></a>
                    </div> */}
                </div>
            </div>
            <div className='center_footer'>

            </div>
            <div className='right_footer'>
                <h1>Поддержка</h1>
                {/* <p> +7-929-674-05-06 </p>
                <p> +7-914-140-31-16 </p>
                <p> +7-999-716-21-90 </p> */}
            </div>
        </div>
    );
}

export default Footer;
