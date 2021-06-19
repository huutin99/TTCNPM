import React from 'react'
import Header from '../../components/Common/Header'
import Footer from '../../components/Common/Footer'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export default ({ children }) => {

    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={8}>{children}</Grid>
                    <Grid style={{ textAlign: "Left", marginTop: '2rem' }}  item xs={12} md={4}>
                    <iframe width="300" height="600" src="https://img.vietnamnetad.vn/html/2021/6/6-6_euro_300x600/6-6_euro_300x600/6-6_euro_300x600.html?clickVNN=https://log.vads.net.vn/ad/click-tracking?action_name=YIr1xIG76Xi6Sb5o3OAOE4DbOpCahDmMRbY2sm@6LAnzUkwXQQTtF@e7080Bj5ubUEtvJK_@$_hXnCYVApZe0nxTbLK6VJQpzFVzGho9JKifkpeZCsvJ4zw24Qe1NeRRQbV9@10TY32hXoa3AAgafgQiwVpFgjUPdRHbfTZiiuENBhnQo9m3Az0_@$_f4UKRU2TAxb_@$_GWdHAdyzyRn5blK2CochPesi@72@Za7dMbx4rBc8RX2c@2Wso5e@JQiv3oHZGY_@$_bBK5oS9hxmr1RcBCw5iSKjlTncEt3spt29f92IQX5ZfBQNs2eWO18u5BuYmwO9JlTz0KgaAAwPJ831rTqe2pNNw460le_@$_VdUjJ2SMeG3Cy04MAVEA58qkT9tm6fViyvAZboU@eqNnM9sONAkGmKRe1Sb5QRZRR21UU9jghkDXcU=" marginwidth="0" allowtransparency="true" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>
                    <iframe src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/lanphamthi/2021_06_11/KHAUTRANG_ADX_1006_300x600/KHAUTRANG_ADX_1006_300x600/KHAUTRANG_ADX_1006_300x600.html?url=%2F%2Flg1.logging.admicro.vn%2Fadn%3Fdmn%3Dhttps%253A%252F%252Fvietnamnet.vn%252Fvn%252Fphap-luat%252Fha-noi-xoa-so-du-o-ng-da-y-to-chu-c-da-nh-ba-c-qua-mang-quy-mo-lon-746470.html%26rid%3D407d0eb4-da65-4250-9bf7-4bebfac5af85142-60ca0c6c%26ctr%3D0.462041498394683%26sspb%3D10825%26sspr%3D0.1194%26lsn%3D1623854187325%26ce%3D1%26lc%3D5%26cr%3D1623734336%26ui%3D4937343362885458816%26uuid%3D%26bi%3D0%26cmpg%3D58425%26items%3D241822%26zid%3D510750%26pr%3D24226724014%26cid%3D-1%26tp%3D11%26tpn%3D4%26alg%3D10%26sspz%3D2012758%26adc_cpa%3D1%26cov%3D1%26re%3Dhttps%253A%252F%252Fecommed.vn%252Fgia-cong-khau-trang%252F%253Futm_source%253DAdmicro%2526utm_medium%253Dadx-pc%2526utm_campaign%253Djune-2021%2526utm_term%253Dcpc&amp;admid=adnzone_510750_0_241822&amp;vast=https%3A%2F%2Fsspapi.admicro.vn%2Fssp_request%2Fvideo%3Fu%3Dvietnamnet.vn%252Fvn%252Fphap-luat%252Fha-noi-xoa-so-du-o-ng-da-y-to-chu-c-da-nh-ba-c-qua-mang-quy-mo-lon-746470.html%26z%3D510750%26p%3D1%26w%3D650%26h%3D300%26%26lsn%3D6e170b6111b580ab9df9d2da133f7d4f%26dgid%3De6c813139371894e4a43879e3eeceb81%26l%3D5%26loc%3D5%26i%3D4937343362885458816%26isdetail%3D1%26pid%3D%26tags%3D5%26adstype%3D%26vtype%3D8%26vid%3D%26bannerid%3D241822" width="300" height="600" frameborder="0" scrolling="no"></iframe>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

