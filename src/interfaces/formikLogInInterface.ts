export interface initialValues {
    email:string;
    password:string
}

export default interface loginInterfaceForFormik{
    initialValues:initialValues;
    onSubmit?:void;
    validationSchema:object;
}