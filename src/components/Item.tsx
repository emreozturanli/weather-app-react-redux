interface IItemProps {
    spanText: string
    text: string
    children: JSX.Element | JSX.Element[]
}

const Item = (props: IItemProps) => {

    const itemStyle = 'capitalize flex flex-col items-center bg-slate-400 rounded-lg px-2 py-1';

    return (
        <div className={itemStyle}>
            {props.children}
            <div>
                <span className='text-lg text-blue-600 mr-2'>
                    {props.spanText} :
                </span>
                {props.text}
            </div>
        </div>
    )
}

export default Item