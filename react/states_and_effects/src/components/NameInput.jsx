export function NameInput({id, label, value, onChange }) {
  return <div>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} value={value} onChange={onChange}/>
  </div>
}
