import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function Nodejs()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Nodejs";
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
        <dh.H1>NodeJS</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">

        <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NodeJS Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    NodeJS, Chrome tarayıcısının V8 Javascript motorunun üzerine kurulmuş bir çalışma zamanıdır.
                    Tarayıcıda olup bitenlerin aksine nodejs, javascript'in işletim sistemi arayüzlerine, donanıma,
                    çalışan işlemlere ve soketlere erişme vb. olaylarını engellemez, soyutlamaz veya filtrelemez.
                    Temel olarak olaya dayalı ilerleyen ve asenkron çalışan nodejs diğer framework ve programlama
                    dillerinin aksine tek iş parçacığı üzerinde çalışarak kontrolü ve zaman zaman anlaması zorlaşan
                    thread yapılarını gereksiz sayıda açmaktan kurtarır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NodeJS Ne İşe Yarar?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    NodeJS ölçeklenebilir ağ uygulamaları oluşturmak için tasarlanmıştır. Bir çok platform üzerinde
                    web ortamları, çok oyunculu oyun ağları ve soket uygulamaları için backend framework veya api
                    olarak kullanılmaktadır. Bütün bunların dışında sabit bir kullanım alanı yoktur.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Asenkron Olması Neyi Değiştirir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Bir çok programlama dilinde dosya işlemler, donanım katmanı kesmeleri, işletim sistemi veri alışverişi
                    veya soket üzerinde veri gönderme/alma gibi işlemlerde bulunduğu iş parçacığını durdurmaktadır.
                    Bu gibi sistemlerde örneğin bir dosya üzerinde yazım işlemi yapılırken yazım işlemi bitene kadar kaynak
                    kod her ne kadar bu işten bağımsız işlemler bulunsada bir sonraki adıma geçemez. Bunun yerine G/C engelleyici
                    bir çok algoritma thread yapılarıyla farklı bir işlemci çekirdeğine görev olarak sunulur buda veri senkronizasyonu
                    ve iletişimi konusunda algoritmik zorluklar çıkarabilir.
                    Nodejs bunun yerine GC işlemlerini callback/revoke tekniğiyle bloğun ilerleyişini durdurmadan donanımlara görevlerini
                    ileterek devam eder, işlemler sonuca olaştığı takdirde fonksiyonlar tekrar tetiklenir ve böylece cpu ile alakası olmayan
                    disk ve soket bir işlemler yapılırken işlemci boşta bırakılmaz.
                    Her ne kadar asenkron yapısı işlemcinin başarımını yükseltsede yoğun işlemci kullanımlarına bir avantaj sağlamaz
                    bu yüzden dahili olarak cluster ve thread yapılarını bünyesinde barındırır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden Javascript?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Javascript tarayıcı içerisinde halihazırda tek işlemci üzerinde en yüksek başarım sağlayacak şekilde tasarlanmıştır.
                    Dil seçiminde javascript kullanılarak hem web alanında tecrübeli kitlelerin backend tarafına hızlıca uyum sağlamaları
                    amaçlanmış hemde tarayıcı tarafında kullanılan bir çok kütüphanenin kolayca sunucu tarafında da kullanılması sağlanmıştır.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NodeJS Desteği Ne Durumda?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    NodeJS; RedHat, Google, Github, Godaddy, Microsoft ve IBM tarafından desteklenme beraber OpenJS birliği ve
                    MIT Lisansıyla gelişimi ve sürdürebilirliği sağlanmaktadır. NodeJS gelişmeleri ve uzun vadeli sürümleride
                    tüm sürümlerinin dahil dağıtımları nodejs.org üzerinden gerçekleştirilmektedir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Hangi Platformlar NodeJS kullanıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    En başta LinkedIn olmak üzere Netflix, PayPal, eBay, Medium, Mozilla ve Godaddy gibi bir çok şirket
                    gerek web alt yapılarında gerekse şirket için ERP benzeri yazılım nodejs'i aktif olarak kullanmaktadırlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NodeJS'i Nasıl Öğrenebilirim?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Eğer frontend kısmında web siteleri geliştiren bir yazılımcıysanız nodejs'in temel ve mantıksal yapısına
                    sahipsiniz demektir. Temel olarak nodejs dökümanlarınızı nodejs.org üzerinden, Mozilla
                    developer network veya w3schools üzerinden edinebilirsiniz.
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