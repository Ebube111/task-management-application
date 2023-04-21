import EditIcon from '../../assets/edit-icon.svg'
import './taskCard.scss'

type Task = {
    title: string
    description: string
}

const TaskCard = ({title, description}: Task) => {
  return (
    <div className='task-card-container'>
        <div className='task-card-text-section'>
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
        <div className='task-card-footer'>
            <button className='card-button'>Todo</button>
            <img alt="" src={EditIcon} />
        </div>
    </div>
  )
}

export default TaskCard