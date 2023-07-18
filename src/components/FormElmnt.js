import { useState } from "react";

function FormElmnt(){
    const genders=['Kadın','Erkek'];

    const [name, setName]=useState('');
    const [description, setDescription]=useState('');
    const [gender, setGender]=useState('0');
    const [rule, setRule]=useState(false);
    const [rules, setRules]=useState([
        {key:1, value: "1. kuralı kabul ettim", checked:false},
        {key:2, value: "2. kuralı kabul ettim",checked:true},
        {key:3, value: "3. kuralı kabul ettim",checked:false}
    ]);
    const [level, setLevel]=useState('beginner');

    const levels=[
        {key:"beginner", value:"Yeni Başlayan"},
        {key:"Jr_Dev", value:"Jr_Dev"},
        {key:"Sr_dev", value:"Sr_Dev"}
    ]

    const checkedRule=(key, checked)=>{
        setRules(rules=>rules.map(rule=>{
            if(key === rule.key){
                rule.checked=checked
            }
            return rule;
        }))
    }
    //! every() metodu 
    const enabled=rules.every(rule=>rule.checked)
    return(
        <>
            <button onClick={()=> setName('Ahmet')}>Adı değiştir</button>

            <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            <br/>
            {name}
            <br></br>
            <textarea value={description} onChange={e=> setDescription(e.target.value)}></textarea>
            <br></br>
            {description}
            <select value={gender} onChange={e=> setGender(e.target.value)}>
                <option value={'Cinsiyet Seçin'}>Cinsiyet Seçin</option>
                {genders.map((gender,index)=>(
                    <option value={gender} key={index}>{gender}</option>
                ))}
            </select>
            {gender}
            <br/>
            <label>
                <input type="checkbox" checked={rule} onChange={e=> setRule(e.target.checked)} />Sözleşmeyi kabul edin
            </label>
            <br/>
            {rules.map((rule,index)=>(
                <label key={rule.key}>
                    <input type="checkbox" checked={rule.checked} key={index} onChange={e=> checkedRule(rule.key, e.target.checked)}/>
                    {rule.value}
                </label>
            ))}
            <button disabled={!rule}>Devam et</button>
            <br/>
            {JSON.stringify(rules)}
            <br/>
            {levels.map((l,index)=>(
                <label key={index}>
                    <input type="radio" value={l.key} checked={l.key===level} onChange={e=>setLevel(e.target.value)}/>
                    {l.value}
                </label>
            ))}
        </>
    )
}

export default FormElmnt