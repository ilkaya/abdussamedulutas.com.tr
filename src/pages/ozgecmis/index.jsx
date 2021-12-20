import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";


export default function Ozgecmis()
{
    let age = moment("0001-01-01").add({days:moment(moment.now()).diff("1998-03-17","days")},"years").get("year");

    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Özgeçmiş";
    },[]);

    const styleProps = {
        sx:{
            width:{
                sm:"25vw",
                xs:"100%",
                md: "25vw"
            },
            maxWidth:{sm:"400px"},
            minWidth:{sm:"300px"}
        },
        maxWidth: "500px",
        margin: 2
    };

    return <>
        <dh.H1>Ben Kimim?</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Ben <b>Kim</b>im?</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        Adım Abdussamed ULUTAŞ ve {age} yaşındayım. Kendini güncel bilgisayar ağları ve web teknolojilerine adamış kıdemli yazılım
                            uzmanı ve yönetim bilişim sistemleri uzmanıyım
                    </CardContent>
                </Card>
            </Box>
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Ben <b>Ne</b>yim?</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        <List dense={true}>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="kc tech arge bilişim firmasının arge ofisinde kıdemli yazılım uzmanıyım."/>
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Anadolu Üniversitesi açıköğretim fakültesinde öğrenciyim." />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Duha yazılım firmasında full stack web geliştiricisiyim." />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Box>
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Ben <b>Nerede</b>yim?</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        <List dense={true}>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Sivaslıyım." />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Kayseride yaşıyorum." />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Kayseride çalışıyorum." />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Eskişehir Üniversitesinde açıktan okuyorum" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Box>
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Ben <b>Nasıl</b> Biriyim?</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        Gelişmelere oldukta açık, güncel teknolojiyi takip eden, hırslı ve heyecanlı,
                        olabildiğinde alanında en iyi olmaya çalışan, kalite odaklı asosyal takım çalışmasına uygun birisiyim
                    </CardContent>
                </Card>
            </Box>
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Peki <b>Neden</b> Bu Sektördeyim?</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        Teknolojinin hiç bir zaman geriye doğru ilermediğinin en bariz kanıtı olan yazılım sektörünün
                        bir üyesi olarak teknolojinin engin okyanusunda bir mercan bölgesi oluşturmak ve diğer geliştiricilere ve insanlara yararlı bir habitat sunabilmek en berrak vizyonumdur
                    </CardContent>
                </Card>
            </Box>
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Ben <b>Ne zaman</b>dır Yazılım Sektöründeyim?</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        <List dense={true}>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="16 yaşımda ilk basit web sayfamı hazırladım." />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="17 yaşımda Asp C#.NET Core MVC projemi yazdım." />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="18 yaşımda php ile tanıştım ve frameworkleri üzerinde düzenlemelar yaptım" />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="20 yaşımda javascriptin ES6 versiyonunu öğrenerek nodejs üzerinde çalışmaya başladım" />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="22 yaşımda cPanel, ssh, linux ve sunucu yönetimine aşina oldum" />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="23 yaşımda websoket, react, CSS3, webkit ve android studio öğrendim" />
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText disableTypography primary="Şuan react assemblyscript WebRTC ESNext Nodejs teknolojileri üzerinde çalışmalar yürütmekteyim" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </>;
};

class dh{
    static H1(props)
    {
        return <Typography variant="h1" color="text.primary"  style={{margin:0,marginBottom:20,fontSize:"2em",fontWeight:700}} {...props} />
        return <h1 style={{marginTop:0}} {...props} />;
    }
    static H2(props)
    {
        return <h2 style={{margin:0,fontSize:".8em",fontWeight:100}} {...props} />;
    }
}