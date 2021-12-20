import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function WebSocket()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Cache Storage";
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
        <dh.H1>Cache Storage (Önbellek Depolama)</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Önbellek nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Çok sayfalı web siteleri, görüntü, ses, font veya stillerin yüksek çoğunluğunu
                    diğer saylarda da tekrar tekrar kullanılmaktadır. Bir web sitesine girdiğinizde
                    o sitenin örneğin logosunu her sayfa geçişinizde tekrar tekrar indirilerek ağ
                    üzerinde gereksiz trafik yaratmasını istemezsiniz. Tarayıcıların bu gibi tekrarlı
                    içeriklere bulduğu en uygun çözüm, tekrarlı verileri cihazınızda depolayarak
                    gerektiğinde internete bağlanmadan siteyi görüntüleyebilir böylece yüklenme hızını
                    oldukça yükseltir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Cache Storage Ne için Kullanılır?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Tarayıcılar çoğu zaman önbellek durumunu otomatik olarak yöneteceklerdir, ancak gereksiz
                    önbellek tutma veya önbelleğin temizlenmemesi tarayıcının web sitesinin güncel halini
                    gösterememesine sebep olur, ayrıca diskte fazla yer tutmasına sebep olabilir.
                    Cache Storage, web yazılımcılarına önbellekteki verileri kontrollü olarak tutmasına
                    veya eski verileri güncelleyebilmelerine olanak tanır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Cache Strage Teknolojinin Avantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Önbellek deposuna istediğiniz dosyaları, istekleri ve belgeleri yerleştirebilir ve
                    sunucudan indirmeden önbellekteki veriyi kullanarak işlemleri hızlandırabilir ağdan
                    tasarruf sağlayabilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Cache Strage Teknolojinin Dezavantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Önbellek deposunun kapasitesi cihazın özelliklerine, bellek kapasitesine
                    ve depolama alanının hızına göre değişmekteditr. Önbelleğe yerleştireğiniz herhangi bir verinin
                    hiç bir zaman diske yazıldığı veya uzun süre boyunca orda kalacağı garantisi olmayacaktır.
                    Özellikle mobil cihazlarda tarayıcılar önbellek depolarını temizleme konusunda oldukça
                    aceleci davranacaklardır
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