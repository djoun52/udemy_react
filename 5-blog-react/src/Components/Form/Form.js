import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css'

export default function Form() {
    const [article, setArticle] = useState({
        title: "",
        body: ""
    });

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        
        const newArticle = {
            title: article.title,
            body: article.body,
        }; 


        dispatch({
            type: "ADDARTICLE",
            payload: newArticle,
        })
        
        
        setArticle({
            title: "",
            body: ""
        })
    };

    const changeInput = (e) => {
        
        if (e.target.classList.contains('inp-title')) {
            const newObjState = { ...article, title: e.target.value };
            setArticle(newObjState);

        } else if (e.target.classList.contains('inp-body')) {
            const newObjState = { ...article, body: e.target.value };
            setArticle(newObjState);
        }

    }

    // const addNewTitle = (e) => {
    //     const newObjState = { ...article, title: e.target.value };
    //     setArticle(newObjState);
    // };

    // const addNewBody = (e) => {
    //     const newObjState = { ...article, body: e.target.value };
    //     setArticle(newObjState);


    // };

    return (
        <>
            <h1 className="title-form">Écrirez un article</h1>

            <form className="container-form" onSubmit={handleForm}>
                <label htmlFor="title">Titre</label>
                <input
                    onInput={changeInput}
                    value={article.title}
                    type="text"
                    id='title'
                    className='inp-title'
                    placeholder="Entrez votre titre"
                />

                <label htmlFor="article"> Votre article</label>
                <textarea
                    onInput={changeInput}
                    value={article.body}
                    id="article"
                    className='inp-body'
                    placeholder="Votre article"
                ></textarea>
                <button>Envoyer l'article</button>
            </form>
        </>
    );
}
