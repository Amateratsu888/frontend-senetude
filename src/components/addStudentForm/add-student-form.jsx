import React from "react";
import { useForm } from "react-hook-form";
import { addStudentService } from "../../services/student/student-service";

const AddStudentForm = ({ inputList }) => {

  const { register, handleSubmit, formState  } = useForm();


  const addNewStudent = (data) => {
    console.log(data);
    addStudentService(data)
  }

  return (
    <div className="">
      <form className="w-full max-w-4xl" onSubmit={handleSubmit(addNewStudent)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Prénom <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Prénom ..."
              {...register('firstName', { required: true })} 
            />
            {formState.errors.firstName && <span style={{color: 'red', marginRight: '6px'}}>Le prénom est obligatoire !</span>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Nom <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Nom ..."
              {...register('lastName', { required: true })}

            />
            {formState.errors.lastName && <span style={{color: 'red', marginRight: '6px'}}>Le nom est obligatoire !</span>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-date-naissance"
            >
              Date de naissance <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date-naissance"
              type="date"
              placeholder="Date de naissance"
              {...register('birthDayDate', { required: true })} 

            />
            {formState.errors.birthDayDate && <span style={{color: 'red', marginRight: '6px'}}>La date de naissance est obligatoire !</span>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-lieu-naissance"
            >
              Lieu de naissance <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-lieu-naissance"
              type="text"
              placeholder="Lieu de naissance"
              {...register('birthPlace', { required: true })} // Enregistrez le champ avec des règles de validation

            />
            {formState.errors.birthPlace && <span style={{color: 'red', marginRight: '6px'}}>Le lieu de naissance est obligatoire !</span>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="Email"
              {...register('email', { required: true })} // Enregistrez le champ avec des règles de validation

            />
            {formState.errors.email && <span style={{color: 'red', marginRight: '6px'}}>L'email est obligatoire !</span>}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Mot de passe <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Mot de passe"
              {...register('password', { required: true })} // Enregistrez le champ avec des règles de validation

            />
            {formState.errors.password && <span style={{color: 'red', marginRight: '6px'}}>Le mot de passe est obligatoire !</span>}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-confirm-password"
            >
              Confirmer Mot de passe <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
              
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-confirm-password"
              type="password"
              placeholder="Confirmation mot de passe"
              {...register('confirmPassword', { required: true })}

            />
            {formState.errors.confirmPassword && <span style={{color: 'red', marginRight: '6px'}}>La confirmation du mot de passe est obligatoire !</span>}
          </div>

        </div>
        <div className="flex flex-wrap -mx-3 mb-2 mt-10">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-adresse"
            >
              Adresse
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-adresse"
              type="text"
              placeholder="Lieu de résidence"
              {...register('address')}

            />
            {formState.errors.address && <span style={{color: 'red', marginRight: '6px'}}>L'adresse est obligatoire !</span>}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-telephone"
            >
              Téléphone <span style={{color: 'red', fontSize: '1.3em'}}>*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-telephone"
              type="text"
              placeholder="Telephone"
              {...register('phoneNumber', { required: true })} // Enregistrez le champ avec des règles de validation

            />
            {formState.errors.phoneNumber && <span style={{color: 'red', marginRight: '6px'}}>Le numéro de téléphone est obligatoire !</span>}
          </div>
        </div>
        <div className="mt-10 flex justify-center w-full">
          <div className="w-4/5 flex justify-around">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Valider
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
