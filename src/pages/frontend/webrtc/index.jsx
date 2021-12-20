import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";
function A({link,children})
{
    let w = {
        wikiwebrtc:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
        mdnwebrtc: "https://en.wikipedia.org/wiki/WebRTC",
        mdncreateOffer:"https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer",
        mdncreateAnswer:"https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createAnswer",
        mdnice:"https://developer.mozilla.org/en-US/docs/Glossary/ICE",
        mdncreateDataChannel:"https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel",
        wikip2p:"https://en.wikipedia.org/wiki/Peer-to-peer",
        wikistun:"https://en.wikipedia.org/wiki/STUN",
        wikiturn:"https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT",
        caniusertc:"https://caniuse.com/rtcpeerconnection",
        rtcwebrtc:"https://w3c.github.io/webrtc-pc/"
    };
    return <a href={w[link]} target="_blank">{children}</a>;
}


export default function WebRTC()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | WebRTC";
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
        <dh.H1>Web Real Time Connection (WebRTC)</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC <b>tarayıcılar</b> arasında yüksek hızlı iletişim sağlayan ses ve görüntü
                    iletişimini en düşük gecikme ile karşı tara a ileten karmaşık, güvenilir ve gelişmiş bir teknolojidir.
                    Şuan bir çok görüntülü konuşma, anlık sesli iletişim, mesajlaşma, <A link="wikip2p">P2P</A> dosya paylaşımı yapan sistemlerin
                    alt yapısında webrtc kullanılmaktadır
                    <br/><br/>
                    <A link="mdnwebrtc">Mozilla Developer Network</A>
                    <br/>
                    <A link="wikiwebrtc">Wikipedia</A>
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Nasıl Çalışır?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Sunucuya bağlı iki şahıs kendi aralarında bağlanmak istediklerinde
                    Bağlantıyı başlatan şahıs diğerine <A link="mdncreateOffer">teklif</A> denilen veri gönderir.
                    buna karşılık diğeri ise bu veriye karşılı bir <A link="mdncreateAnswer">cevap</A> üretir ve gönderir.
                    Daha sonra her ikiside birbirlerine ulaşmak için açık ip adreslerini içeren <A link="mdnice">icecandicate</A> üretirler ve bu paketleri
                    yine birbirlerine iletildikten sonra iki tarafta birbirine bağlanmaya başlarlar, bu işleme sinyalizasyon adı verilir.
                    Ve bu bağlantı kurulduktan sonra arada sunucu olmadan (<A link="wikip2p">P2P</A>) iletişim sağlanmış olur
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC ile Neler Paylaşılabilir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC teknolojisi alt yapısal olarak stream veya stream olmayan verileri iletebilir
                    Stream tarayısı apileri üzerinden kameraya, mikrofona ve ekrana erişim sağlanarak alınabilir,
                    WebRTC görüntü ve ses verilerini UDP bağlantısı sağlayarak düşük gecikmeyle ulaştırabilmektedir.
                    WebRTC ayrıca <A link="mdncreateDataChannel">datachannel</A> denilen bir TCP bağlantısı üzerinden binary, json, xml gibi verileride iletebilmektedir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC için Sunucu Yapılandırması Gerekli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC için sunucu sadece sinyalizasyon aşamasında bağlanacak kişilerin arasında ilk veriyi sağlamak için gereklidir.
                    Bunun dışında gerçek ipnizin bulunmasını zorlaştıracak vpn veya proxy gibi bir ağ geçidi kullanıyorsanız veya okul, şirket, fabrika
                    gibi güvenlik duvarının bağlantıyı engelleyebileceği durumlarda <A link="wikiturn">TURN</A>/<A link="wikistun">STUN</A> sunucusu kullanmanız gerekebilir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>İnternet hızım WebRTC için Yeterli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC kişilerin interneti, iletme süresi, trafik yoğunluğuna gibi etkenlere bağlı olarak
                    görüntü ve ses kalitesini yükseltecek veya azaltmak için trafiği sürekli analiz eden teknolojilere sahiptir.
                    Görüntülü konuşma içerisinde en yüksek kalite ancak sizin bilgisayarınız, internet çıkışınız
                    ve bağlı olduğunuz kişinin bilgisayarı
                    ve internet çıkışına göre belirlenecektir. 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC mobil ve masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak desteklenmektedir 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Güvenli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC her bağlantıda <b>DTLS</b> denilen protokolleri devreye sokar,
                    bu protokol UDP/TCP/TLS bağlantılarını şifrelemede <b>web sitesinin aktif SSL güvenliğini kullanır</b>.
                    Kısacası webrtc güvenliği girdiğiniz sitenin güvenlik oranına
                    göre değişir ki <u>SSL olmayan web sitelerinde çalışmaz</u>
                    <br /><br />
                    <A link="caniusertc">Browser Desteği</A><br />
                    <A link="rtcwebrtc">HTML5 WebRTC Çalışma Taslağı</A>
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