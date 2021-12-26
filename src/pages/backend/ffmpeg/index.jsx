import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function Ffmpeg()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Fast Forward MPEG (ffmpeg)";
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
        <dh.H1>Fast Forward MPEG (ffmpeg)</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>FFmpeg Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    FFmpeg, yüksek hızlı medya frameworküdür ve ses, video, resim ve altyazı dosyalarını tanılama, işleme, kesme,
                    kırpma, kalitesini değiştirme, yeniden kodlama, akış sağlama, filtreleme, birleştirme ve ayırma gibi işlemler
                    uygular. 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>FFmpeg Ne İşe Yarar?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    FFmpeg, bizzat konsol ve terminal üzerinden kullanılacağı gibi diğer yazılımlar tarafından da farklı amaçlar
                    için sıkça kullanılmaktadır. Örneğin sunucu tarafında yüklenen dosyaların optimize edilmesi, küçültülmesi için
                    sıkça kullanılmaktadır veya üzerine kullanıcı arayüzü yerleştirilerek toplu resim birleştirme yazılımları
                    tasarlanabilmektedir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden FFmpeg?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    FFmpeg yazılımı portable bir yazılımdır tüm işletim sistemlerinde kullanılabilmektedir, her ne kadar kullanımı
                    başlangıçta karmaşık olsada kendi içerisindeki kodek ve muxerleri kendine ait sql vari söz dizimiyle birlikte
                    rahatça kullanımıza sunmaktadır 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>FFmpeg Hangi Formatları Tanıyabilir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    FFmpeg içerisinde bir çok marka, cihaz ve şirketin muxer, demuxer, encoder, decoder, aygıt ve protokollerin
                    algoritmalarını barındıran yazılım altyapısıdır. <br/>
                    QuickTime, Cinepak, Windows Media Video, Xbox Media, Sonic, Vorbis, Sierra VMD, Opus, AAC  ve daha yüzlerce kodek; 
                    D-Cinema, Apple CAF, Flash Video, FLAC, HLS, Pulse audio, h264, MPEG-2 PS (DVD VOB) ve daha yüzlerce kodlayıcı ve kod çözücü; 
                    ASUS, OpenEXR image, h265, JPEG 2000, Truevision Targa, WavPack, DivX, VPX, OpenCORE AMR-N, ve daha yüzlerce tanımlayıcı içerir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>FFmpeg Hızlı mı?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    FFmpeg kendi içerisinde yapılacak işi olabildiğince threadler ile farklı işlemci çekirdeklerinde bölerek eşzamanlı olarak 
                    bitirmeye çalışır, ayrıca şartlar uygun olduğu takdirde cihaz üzerindeki işlemciyi yoğun olarak kullanma dışında ekran
                    kartı ve ses kartınıda aktif olarak kullanabilmektedir. 
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