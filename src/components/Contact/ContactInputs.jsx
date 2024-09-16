import SmallInput from "./SmallInput";
import LargeInput from "./LargeInput";
import Captcha from "./Captcha";

export default function ContactInputs({ fields, register, errors }) {
    return (
        <>
            {fields.map((field, key) => {
                switch (field.class) {
                    case "recaptcha":
                        return <Captcha field={field} key={key} />;
                    case "largeInput":
                        return (
                            <LargeInput
                                key={key}
                                field={field}
                                {...register(field.name, { required: field.error })}
                                error={errors[field.name]}
                            />
                        );
                    case "contactSmallInput":
                        return (
                            <SmallInput
                                key={key}
                                field={field}
                                {...register(field.name, { required: field.error })}
                                error={errors[field.name]}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
}
