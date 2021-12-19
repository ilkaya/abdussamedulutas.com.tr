import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";


export default function ReactJS()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | ReactJS";
    },[]);

    let cardProperty = {
        variant:"elevation",
        elevation:3,
        sx:{
            width: {sm:"100%",md:"50%"},
            minWidth:"300px",
            flex:{md:1},
            m:1
        }
    }

    return <>
        <dh.H1>WebSoket</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebSoket nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebSoket, sunucu ile kullanıcı arasında çift yönlü tcp iletişimi sağlayan güvenilir bir teknolojidir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden WebSoket?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Fetch ve Ajaxın aksine websocket aksi istenilene kadar sunucuya bağlı kalır.
                    Fetch ve ajax yapıları sunucuya bir kez bağlanır veriyi iletir cevabı aldıktan sonra bağlantılarını kapatırlar.
                    Sunucu, kullanıcıya herhangi bir durumu veya değişikliği belirtmek için kullanıcının bir sonraki bağlantısını beklemek zorundadır.
                    Websoket bağlantısı ile sunucuya bağlandıktan sonra hem sunucu hemde kullanıcı tarafında eşzamansız veri gönderilip alınabilir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebSoketin Avantajı?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Sunucu değişimleri hemen bildirebilir.
                    Kullanıcının sisteminiz içerisinde olduğu veya sayfanızdan ayrıldığını anlık görebilirsiniz.
                    Sunucunuz her veri iletiminde tcp bağlantısı veya güvenlinir bağlantı (ssl handshake session) kurmak zorunda kalmaz.
                    Bir kullanıcıdan gelen mesaj diğer kullanıcının bağlantı kurmasını beklemeden iletildiği için kullanıcılar arası iletişim hızlanır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebSoketin Dezavantajı?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebSoket çift yönlü tek şeritli yol gibidir, dosya göndermek için kullanılamaz, büyük veriler ilettiğinizde
                    gönderdiğiniz ileti tamamen karşı tarafa ulaşmadan yeni bir veri gönderemez veya alamazsınız.
                    Büyük ölçekli bir web sitesinde Websocket bağlantıları arttıkça sunucu her bir TCP/IP bağlantısı için tcp
                    kontrolleri oturumlar ve ping sürelerini tutacağı için sunucu tarafında internet kartı ve
                    ram sorunları ortaya çıkmaya bağlayacaktır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebSoketin Sunucu Yapılandırması Gerekir mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebSocket kullanmanız için sunucu yazılımınızın (yada frameworkünüzün) websoket bağlantılarını
                    aktif olarak dinlemesi gerekmektedir. Frontend kısmında herhangi bir kuruluma ihtiyaç yoktur
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebSoket Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Websoket mobil ve masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak desteklenmektedir.
                    Ayrıca .NET ve QT5 gibi bir çok masaüstü yazılımı ve Androidde Java, IOSta Swift ortamlarında rahatça
                    bağlantı gerçekleştirilebilmektedir
                </CardContent>
            </Card>
        </Box>
    </>;
};

class dh{
    static H1(props)
    {
        return <Typography variant="h1" color="text.primary"  style={{margin:0,marginBottom:20,fontSize:"2em",fontWeight:700}} {...props} />
    }
    static H2(props)
    {
        return <h2 style={{margin:0,fontSize:".8em",fontWeight:100}} {...props} />;
    }
}