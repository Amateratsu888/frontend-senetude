import React from "react";
import AddUniversityForm from "../../../../components/addUniversityForm/add-university-form";

const AddUniversity = () => {
  return (
    <div className="add-form py-10 px-8">
      <h1 className="text-4xl">
        Ajouter une nouvelle université
      </h1>
      <div className="form-container mt-6">
        <AddUniversityForm />
      </div>
    </div>
  );
};

export default AddUniversity;
