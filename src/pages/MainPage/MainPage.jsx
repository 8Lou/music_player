
import trackList from "../../assets/trackList";

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
                    <div>{JSON.stringify(track)}</div>
                ))}
            </div>
        </div>
    );
}



export default MainPage;