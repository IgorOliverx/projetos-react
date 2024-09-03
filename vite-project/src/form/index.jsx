import Input from "../Input/index.jsx";

const Form = (props) => {
    return (
        <>
            <form className='w-full h-full flex flex-wrap' action={props.action} method={props.method}>
                <Input type='text' placeholder='Título do Livro'/>
            </form>
        </>
    )
}
export default Form;