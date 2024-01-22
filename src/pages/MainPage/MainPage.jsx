
import trackList from "../../assets/trackList";
import Track from "../../components/Track/Track";

import style from "./mainPage.module.scss";

const MainPage = () => {
    return (
        <div className={style.search}>
            {/* <Input
                className={style.input}
                placeholder="Поиск треков"
                onChange={handleChange} */}
            {/* /> */}
            <div className={style.list}>
                {trackList.map((track) => (
                    <Track key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
}



export default MainPage;