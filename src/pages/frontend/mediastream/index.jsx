import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function WebSocket()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | WebWorker";
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
        <dh.H1>WebWorker</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
        <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebWorker nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Tarayıcılar her websitesi için sekme başına bir javascript iş parçacığı çalıştırmak üzere tasarlanır.
                    Çoğu durumda web tasarımcıları javascript üzerine yüksek hesap gerektiren algoritmalar yazmaktan kaçınırlar,
                    bunun en büyük sebebi ise yüksek işlemci yoğunluğunda web sitesi arayüzünün donması/kasması takılmasıdır.
                    WebWorker, yoğun işlem gerektiren işlemlerde yazılımcıların  algoritmalarını farklı işlemci çekirdeğinde
                    çalıştırarak arayüzde donmaların önüne geçerken aynı zamanda hesaplamaları arkaplanda devam etmelerini sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebWorker Güvenli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Günümüzde webworkerlar her ne kadar kötü niyetli yazılımcıların kripto para basmak için en çok kullandıkları
                    yöntem olsada sunucudan gelen büyük verileri arkaplanda atarak, filtreleme, arama, farkı bulma benzeri işlemleri
                    web siteniz stres altındayken dahi hızlı bir şekilde çözmenizi sağlar ve bu durum SEO açısından da çoğu zaman
                    olumlu olarak yorumlanır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebWorker için Sunucu Yapılandırması Gerekir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Hayır, tarayıcılarda dahili olarak desteklenen apidir ve sunucu tarafında herhangi bir işleme gerek yoktur
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebWorker Avantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebWorker, kolayca hazırlanıp rahatça debug edilebilmektedir. Ana süreçte yaptığınız sonsuz döngü hatalardan dolayı donan
                    tarayıcının aksine webworkerde gerçekleştirdiğiniz bu tip hatalar tarayıcıyı veya sekmeyi kilitlememektedir.
                    Ayrıca ana süreç ile WebWorker arasında oluşturulan hat sayesinde iki taraf arasında kolayca veri iletimi gerçekleştirebilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebWorker Dezavantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    C#, java gibi dillerindeki thread yapısının aksine WebWorker bir javascript alanında çalışmaya başlatılamaz,
                    her webworker kendine özel javascript dosyası ile çalışmaya başlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebWorker Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                WebWorker her ne kadar mobil ve masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak destekleniyor gibi
                görünsede performans kaygısından ötürü bazı tarayıcılar mobil webview veya iframe tarafında bazı kısıtlamalar getirebilmektedir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Peki WebWorker ile Ne Yapılamaz?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebWorker, arayüz yapılarına direkt erişimi <b>yoktur</b>, webworker içerisinde video gösteremez bildirim dışında
                    her hangi bir arayüz güncellemesini webworker içerisinden yapamazsınız bunun yerine işlenen verileri
                    alıp güncellenecek veriler için webworker dışında ek kod yazmanız gerekir. 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>SharedWorker Nedir ?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Bir WebWorker aynı domainden birden fazla sekme ile haberleşmeyi sağlayabilir (SharedWorker).
                    Veya bir Worker'i tüm sekmeler kapatılsa dahi, arkaplanda bildirimleri veya değişimleri
                    alması için çalışmasına devam ettirebilirsiniz (ServiceWorker)
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