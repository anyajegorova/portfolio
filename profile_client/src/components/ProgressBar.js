import './ProgressBar.css';

const ProgressBar = ({ percent }) => {
    return (
        <div className='wrapper-container'>
            <div className='progress-bar'>
                <span className='progress-bar-fill' style={{ width: percent }}> </span>
            </div>


        </div>
    )
}

export default ProgressBar;