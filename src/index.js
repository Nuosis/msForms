//Here we're importing items we'll need. You can add other imports here.

//The first function. Remove this.
//const btn = document.querySelector("button");
function submitForm() {
  const orgName = document.getElementById("orgName").value;
  const website = document.getElementById("website").value;
  const permissions = Array.from(document.querySelectorAll('input[name="permissions"]:checked')).map(checkbox => checkbox.value);

  const formData = {
      orgName: orgName,
      website: website,
      permissions: permissions
  };
  FileMaker.PerformScript("receiveFormText",JSON.stringify(formData));
};

function resetForm() {
  document.getElementById("orgParamForm").reset();
};

function generateCheckboxInputs(input) {
  const permissions = JSON.parse(input);
  console.log(permissions)

  const checkboxContainer = document.getElementById('checkboxContainer');
  
  permissions.forEach(permission => {
      const checkboxDiv = document.createElement('div');
      checkboxDiv.classList.add('form-check');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('form-check-input');
      checkbox.id = permission.value;
      checkbox.name = 'permissions';
      checkbox.value = permission.value;

      const label = document.createElement('label');
      label.classList.add('form-check-label');
      label.htmlFor = permission.value;
      label.textContent = permission.label;

      checkboxDiv.appendChild(checkbox);
      checkboxDiv.appendChild(label);

      checkboxContainer.appendChild(checkboxDiv);
  });
}
