import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";


export default function IndexedDB()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | IndexedDB";
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
        <dh.H1>IndexedDB</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>IndexedDB nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    IndexedDB tarayıcılarda veritabanı benzeri bir yapı ile verileri düzenli olarak depolamanızı yarayan sistemdir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden IndexedDB?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    IndexedDB kullanımı oldukça ucu açık yazılımcılara bırakılmış bir ekosistemdir. Kullanıcının yaptığı bütün işlemleri
                    depolayarak daha sonra sunucu ile eşitlemeden, kullanıcıya sık sık verdiğiniz verileri düzenli olarak tarayıcı tutmaya kadar
                    geniş bir kullanım alanına sahiptir, frontend kısmında küçük bir mysql gibi düşünebilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>IndexedDB neler depolayabilir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MySQL gibi ilişkisel veritabanlarının aksine, IndexedDB javascript ile oluşturulabilecek ve serileştirilebilen
                    tüm obje, yazı, sayı, harita, dosya ve listeleri depolayabilir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>IndexedDB Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                IndexedDB mobil ve masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak desteklenmektedir 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>IndexedDB Avantajı?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    IndexedDB güvenlik açığı yaratmayan tüm sayfalarda global olarak kullanılan ve sık sık değişen/güncellenen/okunan
                    verileri kullanıcının beğenimlerini, favori listelerini veya tercihlerini tarayıcıda tutarak hem sunucu tarafında hemde
                    arayüz tarafında güvenli bir şekilde veri işlemenizi sağlayabilir, localStorage ve cache'ye göre oldukça hızlı ve
                    daha büyük bir depolama alanı sunar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>IndexedDB Dezavantajı?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    IndexedDB kullanıcı tarafında uyumluluğu oldukça zor bir işlemdir, herhangi bir kaç tarayıcı sekmesinde aynı anda
                    erişilebilir olduğu için veribütünlüğünü sağlamak için ek koordinasyon gerektirir.
                    IndexedDB ilişkisel bir veritabanı değildir, tablolar arasında birleştirme veya veriler arasında karmaşık sorgular yapamazsınız.
                    Bunun yerine tüm veriler arasında eleme yapan bir sorgulama sistemine sahiptir
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