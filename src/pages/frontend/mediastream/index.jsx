import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function WebSocket()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Media Stream";
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
        <dh.H1>Media Stream (Medya Akışları)</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>MediaStream nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Akışlar, başlangıcı bitişi veya süresi hakkında önceden belirlenemeyen verilerdir.
                    Bunun yerine tarayıcı kamera mikrofon gibi akış aygıtlarına erişimi sembolik yapılar üzerinden
                    erişmenizi sağlayarak veriyi kaydetme, yönlendirme, aktarma ve çizme işlemlerinde
                    çözünürlüğü veya kodeği hesaba katmadan daha rahatça uygulamalar oluşturmanızı sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neler MediaStream Çıktısı Verir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Kamara, Mikrofon ve Ekran paylaşım apisi en yaygın kullanılan MediaStream kaynaklarından biridir.
                    Bunun yanı sıra Canvas, Video ve Audio elementleri üzerindende suni bir akış elde edilebilir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>MediaStream Verisi Ne İşe Yarar?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MediaStream görüntü, ses ve altyazı gibi verileri küçük parçalar haline tutar,
                    mediastream'in sağladığı fonksiyonlar sayesinde iki videoyu birleştirebilir,
                    bir videonun sesini değiştirebilir veya varolan akışı webrtc üzerinden
                    farklı bir cihaza gönderebilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>MediaStream Nerde Kullanılabilir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Bir kamera çıktısını ekranda yansıtarak kullanıcının kendi profil görüntüsünü işlemesini sağlayabilir
                    WebRTC üzerinde kullanarak görüntülü görüşme uygulamalarında kullanabilir veya HLS üzerinden
                    podcast yayını yapabilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>MediaStream Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                WebWorker mobil veya masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak desteklenmektedir
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