import './Button.module.css'


const Button = (props) => {
        return <button  onClick={props.onToggleAuthMode}>{props.children}</button>
}

export default Button