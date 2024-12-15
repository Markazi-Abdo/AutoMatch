/*
export default function Select(){
    return(
        <select className="col-6">
            <option>Abdellatif</option>
            <option>Abdellatif</option>
            <option>Abdellatif</option>
        </select>
    )
} */

    import { useParams } from 'react-router-dom';
    import { useState, useEffect } from 'react';
    import style from "./OptionsConfort.module.css";
    import { connect } from 'react-redux';
    import { setSelectedOption } from "../Reduce/action";
    
    
    
    function OptionsConfort({ cars, setSelectedOption }) {
        const { id, model, anne } = useParams(); // Récupérer les paramètres "id", "model" et "anne"
        const [typeOption, setTypeOption] = useState("standard");

        useEffect(() => {
            console.log(typeOption)
        }, [typeOption])
        // Trouver la marque sélectionnée
        const selectedMarque = cars.find((item) => item.id == id);
        // Vérification de sécurité si `selectedMarque` est introuvable
        if (!selectedMarque) {
            return <p>La marque avec l'ID {id} est introuvable.</p>;
        }
    
        // Declare the hook outside of any conditional rendering
    
        return (
            <ul className={style.body}>
                {selectedMarque.models.map((Model) => {
                    // Vérifier si le modèle correspond
                    if (Model.model === model) {
                        // Récupérer les détails de l'année
                        const detailsAnnee = Model.detailsParAnnee[anne];
    
                        if (!detailsAnnee) {
                            return <p>Aucune donnée disponible pour l'année sélectionnée ({anne}).</p>
                        }
    
                        // Récupérer les options de confort
                        const optionsConfort = detailsAnnee.optionsConfort;
    
    
                        return (
                            Object.entries(optionsConfort).map(([optionKey, optionValues]) => {
                                return (
                                    <li key={optionKey} className={style.card}>
                                        {/* Radio button container */}
                                        <div className={style.radio_container}>
                                            <input
                                                type="radio"
                                                id={optionKey}
                                                name="plan"
                                                value={typeOption} // Store the option as the selected value
                                                onChange={() => {
                                                    setTypeOption(optionKey);
                                                    setSelectedOption(optionValues);
                                                }} // Update state on change
                                            />
                                            <label htmlFor={optionKey}></label>
                                        </div>
    
                                        {/* Card content */}
                                        <div className={style.content}>
                                            {/* Header section */}
                                            <div className={style.header}>
                                                <span className={style.plan_name}>{optionKey}</span>
                                                
                                            </div>
    
                                            {/* Features list */}
                                            <ul className={style.features}>
                                                <li>
                                                    <strong>Description:</strong> {optionValues.description}
                                                </li>
                                                <li>
                                                    <strong>Aides à la conduite:</strong>{" "}
                                                    {optionValues.aidesConduite.join(", ")}
                                                </li>
                                                <li>
                                                    <strong>Multimédia:</strong> {optionValues.multimedia}
                                                </li>
                                            </ul>
    
                                            {/* Pricing section */}
                                            <div className={style.price}>
                                                <span className={style.amount}>{optionValues.prix} €</span>
                                            </div>
                                        </div>
                                    </li>
    
                                );
                            })
                        );
                    }
                })}
    
            </ul>
        );
    }
    
    // Connecter Redux pour accéder au state
    const mapStateToProps = (state) => ({
        cars: state.cars,
    });
    
    const mapDispatchToProps = {
        setSelectedOption,
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(OptionsConfort);