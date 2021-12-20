import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function WebSocket()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Canvas";
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
        <dh.H1>Canvas</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
        <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Canvas nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Canvas; HTML5 ile gelen, tarayıcı üzerinde görüntü oluşturma, görüntü işleme, dönüştürme, birleştirme, parçalama vs. gibi işlemleri
                    yapmanıza olanak sağlayan öğrenmesi kolay ve bir çok alanda kullanılabilecek bir araçtır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden Canvas?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Görüntü işleme, kırpma kesme, görüntü analizi, istatitik pasta grafikleri veya görüntü üzerinde eklemeler gibi
                    işlemlerde sunucuya gerek kalmadan resimleri işleyebilirsiniz. E-Ticaret sitenizde
                    ürünlerin altına barkod yerleştirmek, çizim uygulamaları yapmak, animasyonlu
                    siteler tasarlamak, HTML üzerinde varolmayan yeni araçlar türetmek için oldukça uygun
                    bir ortam oluşturur.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Canvasın Avantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Resimleri kullanıcı tarafında işledikten sonra sunucunuza alarak sunucunuzun resim işleme yükünden kurtarmış olursunuz.
                    Canvas'ın çizim hızı oldukça yüksektir, istatiktik grafikler çıkarma, 2D-3D oyun oynatma, animasyon gösterme, film izletme, kullanıcıların
                    site üzerinde çizimler yapmasına, webcamden gelen görüntüyü işleyerek kullanıcıya eğlenceli araçlar oluşturabilirsiniz 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Canvasın Dezavantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Canvas oldukça düşük seviyeli bir apidir. Pixeller düzeyinde düzenlemeler yapmanıza ve çizgi, çokgen, daire ve
                    resim yerleştirme gibi ilkel araçlar sağlayarak bunların üzerine yapı inşa etmenizi bekler.
                    Çoğu durumda üçüncü taraf eklentileri kullanmak durumunda kalabilirsiniz.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Canvas Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Canvas mobil ve masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak desteklenmektedir 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Canvas ile 2D/3D Oyun Yazabilir miyim?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Evet, Canvas hem 2D hemde 3D görüntüler oluşturmanıza olanak sağlayan araçlar sağlar.
                    2D modunda fonksiyon olarak çizgi, daire, dikdörtgeni, yol, kesim ve renk geçişleri gibi araçlar sunarken
                    3D (webgl) modunda Camera, Sahne, 3D boyutlu vektörler, küpler, prizmalar, yansıma, aydınlatma gibi fonksiyonlar
                    sunar.
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