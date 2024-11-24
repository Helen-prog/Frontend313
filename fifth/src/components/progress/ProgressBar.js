import "./ProgressBar.css";

function ProgressBar({persent}){

    const getColor = () => {
        if(persent < 40){
            return "#ff0000";
        } else if (persent < 70){
            return "#ffa500";
        } else {
            return "#2ecc71";
        }
    }

    return(
        <div className="progress-bar">
            <div className="progress-bar-fill"
                style={{ width: `${persent}%`, background: getColor()}}
            ></div>
        </div>
    )
}

export default ProgressBar;