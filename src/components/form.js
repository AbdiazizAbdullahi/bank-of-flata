import React, { useState } from "react";

function Form({ onSubmit }) {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    
    const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ date, category, description, amount });
    setDate("");
    setCategory("");
    setDescription("");
    setAmount("");
    };
    
    return (
    <form className="form-container" onSubmit={handleSubmit}>
    <label>
    Date:
    <input
    type="text"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    />
    </label>
    <label>
    Category:
    <input
    type="text"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    />
    </label>
    <label>
    Description:
    <input
    type="text"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    </label>
    <label>
    Amount:
    <input
    type="text"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    />
    </label>
  <button type="submit">Add Transaction</button>
</form>
);
}

export default Form;
