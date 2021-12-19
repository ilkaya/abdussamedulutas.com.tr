import { Avatar, Collapse, Divider, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import React, { useState } from "react"
import { useHistory } from "react-router";

import icon from "../../images/icon.webp";
import "./Context.scss";

import profile_webp from "../../images/profile.webp";
import { Box } from "@mui/system";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
export default function Content({select,...props})
{
    let history = useHistory();
    return <>
        <Box flex={1} m={2} display={"flex"} sx={{flexDirection:{md:"row",xs:"column"},overflow: {md:"auto",xs:"visible"}}}>
            <Box sx={{width:{sm:"20vw",xs:"100%"},maxWidth:{sm:"300px"},minWidth:{sm:"200px"}}} mb={2}>
                <Paper variant="elevation" elevation={5} style={{width:"100%",height:"100%",display:"flex",flexDirection:"column"}}>
                    <Box>
                        <img async defer src={profile_webp} className="profile-image" alt="Profile Image" />
                    </Box>
                    <Box flex={1} overflow="auto">
                        <List>
                            <Divider />
                            <ListItemButton onClick={e => history.push("/ozgecmis")} selected={select === 0}>
                                <ListItemText primary="Özgeçmiş"/>
                            </ListItemButton>
                            <Divider />
                            <CollapsedListItem primary="FrontEnd Teknolojiler">
                                <ListItemButton onClick={e => history.push("/frontend/webrtc")} selected={select === 1}>
                                    <ListItemText primary="WebRTC" secondary="P2P Gerçek Zamanlı Bağlantı"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/react")} selected={select === 1}>
                                    <ListItemText primary="React" secondary="JSX, Webpack, Redux Yüksek Hızlı Arayüzler Tasarlama"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/websocket")} selected={select === 2}>
                                    <ListItemText primary="WebSocket" secondary="Sunucu ile Yüksek Hızlı İletişim"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/indexeddb")} selected={select === 4}>
                                    <ListItemText primary="IndexedDB" secondary="Tarayıcı Tarafında İlişkisel Veritabanı"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/canvas")} selected={select === 3}>
                                    <ListItemText primary="Canvas" secondary="Düşük Seviyeli Grafik İşleme"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/webworker")} selected={select === 5}>
                                    <ListItemText primary="Web Worker" secondary="Thread Yapısı"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/mediastream")} selected={select === 6}>
                                    <ListItemText primary="Media Stream" secondary="Kamera, Mikrofon Video"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/frontend/cachestorage")} selected={select === 7}>
                                    <ListItemText primary="Cache Storage" secondary="Tarayıcı Önbelleğine Veri Yazma/Okuma"/>
                                </ListItemButton>
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <CollapsedListItem primary="Backend Teknolojiler">
                                <ListItemButton onClick={e => history.push("/backend/ffmpeg")} selected={select === 8}>
                                    <ListItemText primary="FFMPEG" secondary="Video, Resim, Ses kodlama"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/backend/nodejs")} selected={select === 9}>
                                    <ListItemText primary="NodeJS" secondary="WebSocket, Restfull API, HTTP/2.0"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/backend/nginx")} selected={select === 10}>
                                    <ListItemText primary="NGINX" secondary="Reverse Proxy, Automated SSL, Multidomain Sunucu"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/backend/cryptology")} selected={select === 11}>
                                    <ListItemText primary="Kriptoloji" secondary="OpenSSL, AES128 GCM, Hashing, Diffie Hellman, Akış Şifreleme"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/backend/stunturn")} selected={select === 12}>
                                    <ListItemText primary="TURN/STUN" secondary="Görüntülü / Sesli Görüşme / Ekran Paylaşımı"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/backend/mysql")} selected={select === 13}>
                                    <ListItemText primary="MariaDB" secondary="İlişkisel Veritabanı"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/backend/redis")} selected={select === 14}>
                                    <ListItemText primary="Redis" secondary="Bellek Tabanlı Önbellek Depolama"/>
                                </ListItemButton>
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <CollapsedListItem primary="Manjaro Linux">
                                <ListItemButton onClick={e => history.push("/manjaro/neden")} selected={select === 15}>
                                    <ListItemText primary="Neden Manjaro?" secondary="Güncel Linüx Kernel, Python, JVM, GCC, PHP, Nodejs Hızlandırma Teknolojisi"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/manjaro/kurulum")} selected={select === 16}>
                                    <ListItemText primary="Güvenli ve Hızlı Kurulum" secondary="64bit Makine, Kurmadan Önce Canlı Test Etme"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/manjaro/ozellestirme")} selected={select === 17}>
                                    <ListItemText primary="Kişiselleştirme" secondary="KDE Masaüstü, Dil, Zaman, Bölge ve Güç Ayarları"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/manjaro/yazilimlar")} selected={select === 17}>
                                    <ListItemText primary="Pacman / Pamac" secondary="Hızlı Yazılım Kurma Kaldırma ve Sistem Güncellemesi Güncelleme"/>
                                </ListItemButton>
                                <Divider />
                                <ListItemButton onClick={e => history.push("/manjaro/mhwd")} selected={select === 17}>
                                    <ListItemText primary="MHWD" secondary="AMD, NVidia, İntel Çoklu Ekran Kartı Sistemleri İçin Driver Kurma Kaldırma"/>
                                </ListItemButton>
                                <Divider />
                            </CollapsedListItem>
                            <Divider />
                            <CollapsedListItem primary="Kendi Projelerim">
                                <ListItemButton onClick={e => history.push("/github/hemexjs")} selected={select === 15}>
                                    <ListItemText primary="HemexJS" secondary="Metin Madenciliği Format Biçimlendirme, İşleme ve Dönüştürme Kütüphanesi"/>
                                </ListItemButton>
                                <Divider />
                            </CollapsedListItem>
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