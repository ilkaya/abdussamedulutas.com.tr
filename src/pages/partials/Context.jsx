import { Avatar, Collapse, Divider, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import React, { useState,useEffect } from "react"
import { useHistory } from "react-router";
import "./Context.scss";

import profile_webp from "../../images/profile.webp";
import { Box } from "@mui/system";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector, useStore } from "react-redux";
import { SetPage } from "../../redux/default.redux";
export default function Content({select,...props})
{
    return <>
        <Box flex={1} m={2} display={"flex"} sx={{flexDirection:{md:"row",xs:"column"},overflow: {md:"auto",xs:"visible"}}}>
            <Box sx={{width:{sm:"20vw",xs:"100%"},maxWidth:{sm:"300px"},minWidth:{sm:"200px"},p:{md:1,sm:0}}} mb={2}>
                <Paper variant="elevation" elevation={5} style={{width:"100%",height:"100%",display:"flex",flexDirection:"column"}}>
                    <Box>
                        <img async defer src={profile_webp} className="profile-image" alt="Profile Image" />
                    </Box>
                    <Box flex={1} overflow="auto">
                        <List>
                            <Divider />
                            <RouteItem url="/ozgecmis" title="Özgeçmiş" />
                            <Divider />
                            <CollapsedListItem primary="FrontEnd Teknolojiler">
                                <RouteItem url="/frontend/webrtc" title="WebRTC" text="P2P Gerçek Zamanlı Bağlantı"/>
                                <Divider />
                                <RouteItem url="/frontend/react" title="React" text="JSX, Webpack, Redux Yüksek Hızlı Arayüzler Tasarlama"/>
                                <Divider />
                                <RouteItem url="/frontend/websocket" title="WebSocket" text="Sunucu ile Yüksek Hızlı İletişim"/>
                                <Divider />
                                <RouteItem url="/frontend/indexeddb" title="IndexedDB" text="Tarayıcı Tarafında İlişkisel Veritabanı"/>
                                <Divider />
                                <RouteItem url="/frontend/canvas" title="Canvas" text="Düşük Seviyeli Grafik İşleme"/>
                                <Divider />
                                <RouteItem url="/frontend/webworker" title="Web Worker" text="Thread Yapısı" />
                                <Divider />
                                <RouteItem url="/frontend/mediastream" title="Media Stream" text="Kamera, Mikrofon Video"/>
                                <Divider />
                                
                                <RouteItem url="/frontend/cachestorage" title="Cache Storage" text="Tarayıcı Önbelleğine Veri Yazma/Okuma" />
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <CollapsedListItem primary="Backend Teknolojiler">
                                <RouteItem url="/backend/ffmpeg" title="FFMPEG" text="Video, Resim, Ses kodlama" />
                                <Divider />
                                <RouteItem url="/backend/nodejs" title="NodeJS" text="WebSocket, Restfull API, HTTP/2.0"  />
                                <Divider />
                                <RouteItem url="/backend/nginx" title="NGINX" text="Reverse Proxy, Automated SSL, Multidomain Sunucu" />
                                <Divider />
                                <RouteItem url="/backend/cryptology" title="Kriptoloji" text="OpenSSL, AES128 GCM, Hashing, Diffie Hellman, Akış Şifreleme" />
                                <Divider />
                                <RouteItem url="/backend/stunturn" title="TURN/STUN" text="Görüntülü / Sesli Görüşme / Ekran Paylaşımı" />
                                <Divider />
                                <RouteItem url="/backend/mysql" title="MariaDB" text="İlişkisel Veritabanı" />
                                <Divider />
                                <RouteItem url="/backend/redis" title="Redis" text="Bellek Tabanlı Önbellek Depolama" />
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <CollapsedListItem primary="Manjaro Linux">
                                <RouteItem url="/manjaro/neden" title="Neden Manjaro?" text="Güncel Linüx Kernel, Python, JVM, GCC, PHP, Nodejs Hızlandırma Teknolojisi" />
                                <Divider />
                                <RouteItem url="/manjaro/kurulum" title="Güvenli ve Hızlı Kurulum" text="64bit Makine, Kurmadan Önce Canlı Test Etme" />
                                <Divider />
                                <RouteItem url="/manjaro/ozellestirme" title="Kişiselleştirme" text="KDE Masaüstü, Dil, Zaman, Bölge ve Güç Ayarları" />
                                <Divider />
                                <RouteItem url="/manjaro/yazilimlar" title="Pacman / Pamac" text="Hızlı Yazılım Kurma Kaldırma ve Sistem Güncellemesi Güncelleme" />
                                <Divider />
                                <RouteItem url="/manjaro/mhwd" title="MHWD" text="AMD, NVidia, İntel Çoklu Ekran Kartı Sistemleri İçin Driver Kurma Kaldırma" />
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <CollapsedListItem primary="Kendi Projelerim">
                                <RouteItem url="/github/hemexjs" title="HemexJS" text="Metin Madenciliği Format Biçimlendirme, İşleme ve Dönüştürme Kütüphanesi" />
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <RouteItem url="/iletisim" title="Bana Ulaşın" />
                        </List>
                    </Box>
                </Paper>
            </Box>
            <Box
                flex={1}
                display={"flex"}
                sx={{
                    marginLeft:{sx:0,sm:0,md:1,lg:2}
                }}
                flexDirection={"column"}
                style={{overflow:"auto"}}
                {...props}
            />
        </Box>
    </>;
}

function CollapsedListItem({primary,children})
{
    let [open,setOpen] = useState(false);
    function handleClick()
    {
        setOpen(!open);
    }
    return <>
        <ListItemButton onClick={handleClick} selected={open}>
            <ListItemText primary={primary} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List  sx={{ml:2}} component="div" disablePadding>
                {children}
            </List>
        </Collapse>
    </>
}

function RouteItem({url,title,text,soon})
{
    let history = useHistory();
    let dispatch = useDispatch();
    let {page} = useSelector(e => e.defaultRedux)
    
    function click()
    {
        history.push(url);
        dispatch({
            type:"ch/page",
            payload: url
        });
    }
    return <>
        <ListItemButton onClick={click} selected={page == url} disabled={soon}>
            <ListItemText primary={title} secondary={soon ? "Eklenmemiş" : text}/>
        </ListItemButton>
    </>;
}