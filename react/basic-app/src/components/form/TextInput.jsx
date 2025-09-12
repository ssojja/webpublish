
export function TextInput({item, value, handleChange}) {
    const {type, name, msg} = item;
    console.log(type, name, msg);

    return (
            <input type={type} 
                    name={name} 
                    value={value} 
                    placeholder={msg} 
                    onChange={(e)=>{ handleChange(e); }} />
    );
}