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
        <dh.H1>ReactJS Framework</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>React Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    React web üzerinde kullanıcı arayüzü oluşturmaya yarayan oldukça kullanışlı ve yüksek performansa sahip javascript kütüphanesidir.
                    Bir web sitesinin tüm sayfalarını, kompanentlerini ve stillerini bir arada tutarak kullanıcıya hızlı sayfa geçişleri ve
                    görsel değişimleri sunmanıza olanak tanırken geliştirici tarafında da oldukça esnek programlamaya olanak tanır ve
                    projelerin ivmelenerek ilerlemesini sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden React?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    React içerisinde dahili olarak kullanılan JSX formatı sayesinde javascript komutları ile html kodlarını
                    iç içe kullanmanızı sağlayarak görünümü kalıplara, modeller, nesneye yönelik şemalar halinde yönetmenizi sağlar.
                    Kullanıcı ile etkileşim esnasında iç içe yerleştirilmiş görünümleri belirli durumlarda tekrar yorumlayarak
                    arayüz değişimlerini create, update, read veya delete komutlarını elle yazmak yerine otomatik olarak çözümler
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Performans ?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    React ile yazılmış proje içerisinde yüzlerce jsx dosyası ve onlarca css, ts veya svg dosyası bulunabilir,
                    Webpack tüm dosyaları çözümleyip olabildiğinde tek bir dosyaya derleme çalışacaktır. Tüm bir temayı paketleyip
                    kullanıcıya gönderebilirsiniz, böylece kullanıcı basit arayüz güncellemeleri veya sayfa geçişlerinde tekrar
                    sunucunuza istek atmak zorunda kalmayacaktır. Bu durum hem sunucu tarafında hemde arayüz tarafında yüksek performans sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Sunucu Yapılandırması Gerekir mi ?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Hayır, Asp.net, Laravel, Codeigniter ve herhangi bir python ve java projenizde hiç bir değişim olmadan kullanabilirsiniz.
                    React projesini derlediğinizde Webpackdan aldığınız çıktıyı html dosyanıza import etmek yeterli olacaktır
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