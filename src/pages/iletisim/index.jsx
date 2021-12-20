import React, { useEffect, useState } from "react"
import { Box } from "@mui/system";
import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, CircularProgress, Divider, Input, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import moment from "moment";
import useForm from "../../utils/useForm";
import axios from "axios";


export default function Iletisim()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | İletişim";
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
        <dh.H1>Bana Ulaşın</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
            {/*<Box margin={2} flex={1}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>İletişim Formu Üzerinden</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        <ContactForm />
                    </CardContent>
                </Card>
            </Box>*/}
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardHeader
                        title={<dh.H2>Mail Üzerinden</dh.H2>}
                    />
                    <CardContent style={{textAlign:"justify"}}>
                        <List dense={true}>
                            <ListItem style={{padding:0}}>
                                <ListItemText>
                                    <a href="mail:info@abdussamedulutas.com.tr">info@abdussamedulutas.com.tr</a>
                                </ListItemText>
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText>
                                    <a href="mail:abdusssamedulutas@yandex.com.tr">abdusssamedulutas@yandex.com.tr</a>
                                </ListItemText>
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText>
                                    <a href="mail:saQutsoftware@gmail.com">saQutsoftware@gmail.com</a>
                                </ListItemText>
                            </ListItem>
                            <ListItem style={{padding:0}}>
                                <ListItemText>
                                    <a href="mail:zences-software@hotmail.com">zences-software@hotmail.com</a>
                                </ListItemText>
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
function ContactForm()
{
    let [isloading,setLoading] = useState(false);
    let [success,setSuccess] = useState(false);
    let {input,state,reset} = useForm({
        name:"",
        surname:"",
        email:"",
        subject:"",
        text:""
    });
    async function sendmail()
    {
        setLoading(true);
        let form = new FormData();
        form.append("z",1);
        form.append("version","1.7.7");
        form.append("lang",navigator.language);
        form.append("action","mail");
        Object.entries(state).forEach(([name,value]) => {
            form.append(name,value);
        });
        await axios.post("/phpmailer/sendmail.php", form);
        setLoading(true);
        reset();
        setSuccess(true);
    }
    return <>
        <Box style={{color:"red"}} display="flex" flexDirection="column">
            <Box>
                <TextField type="text" placeholder="Adınız" title="Adınız" label="Adınız" fullWidth {...input("name")}/>
            </Box>
            <Box mt={2}>
                <TextField type="text" placeholder="Soyadınız" title="Soyadınız" label="Soyadınız" fullWidth {...input("surname")}/>
            </Box>
            <Box mt={2}>
                <TextField type="text" placeholder="E-Posta Adresiniz" title="E-Posta Adresiniz" label="E-Posta Adresiniz" fullWidth {...input("email")}/>
            </Box>
            <Box mt={2}>
                <TextField type="text" placeholder="Konu" title="Konu" label="Konu" fullWidth {...input("subject")}/>
            </Box>
            <Box mt={2}>
                <TextField type="text" placeholder="Metin" title="Metin" label="Metin" fullWidth multiline rows={5} {...input("text")}/>
            </Box>
            <Box mt={2} style={{textAlign:"center"}} display="flex" flexDirection="row">
                {success ? <>
                    <Alert severity="success">
                    <AlertTitle> İletişim kurduğunuz için teşekkür ederim</AlertTitle>
                        En kısa zamanda döneceğimi bilmenizi isterim
                    </Alert>
                </> : <>
                <Button onClick={sendmail} variant="contained" color="primary" sx={{my:"auto"}} disabled={isloading}>
                    Gönder
                </Button>
                {isloading && <CircularProgress size={20} sx={{my:"auto",ml:2}} />} 
                </>}
            </Box>
        </Box>
    </>;
}