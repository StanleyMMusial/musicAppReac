import { useEffect, useState } from 'react'
import { Card, CardContent, CardActions, Select, Typography, Slider, MenuItem } from '@material-ui/core'
import "../css/App.css"


const MusicApp = (props) => {

    const isOffline = "Offline"
    const isOnline = "Online"
    const [notification, setNotify] = useState([])
    const [soundQuality, setQuality] = useState(2)
    const [volume, setVolume] = useState(50)
    const [serverStatus, setStatus] = useState(isOffline)

    useEffect(()=>{
        if(soundQuality === "1"){
           return setNotify(["Quality Degraded. Turn up music quality to correct."])
        } else setNotify([])

    },[soundQuality])


    useEffect(()=>{
        if(volume >= "80"){
            return setNotify(["Listening to music at a high volume could cause long-term hearing loss."])
        } else setNotify([])
    },[volume])

    useEffect(()=>{
        if(serverStatus === isOnline){
            return setNotify([" Your application is offline. You won't be able to share or stream music to other devices"])
        } else setNotify([])
    },[serverStatus])

    const handleStatus = () => {
        if(serverStatus === isOnline){
            return setStatus(isOffline)
        } else  return setStatus(isOnline)
 
    }

    const handleQuality = (e) => {
       return setQuality(e.target.value)
    }

    const handleVolumeChange = (e, newValue) => {
        return setVolume(newValue)
    }
    
    return (
    <Card className="dashboard">

        <CardContent>
            <CardActions>
                <button onClick={handleStatus}>{serverStatus}</button>
            </CardActions>
        </CardContent>

        <CardContent className="card1">
            <CardActions>
                {notification}
            </CardActions>
        </CardContent>
        
        <CardContent className="card2">
          
                Volume Slider
                <Slider className="volume" min={0} max={100} value={volume} step={10} onChange={handleVolumeChange}/>
           
        </CardContent>

        <CardContent>
            <Typography>Music Quality</Typography>
            <Select onChange={handleQuality} value={soundQuality}>
                 <MenuItem value="1">Low</MenuItem>
                 <MenuItem value="2">Med</MenuItem>
                 <MenuItem value="3">High</MenuItem>
            </Select>
        </CardContent>
    </Card>
    )
}

export default MusicApp