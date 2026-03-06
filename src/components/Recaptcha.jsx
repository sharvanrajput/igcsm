import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

/**
 * Google reCAPTCHA v2 "I'm not a robot" checkbox
 * (official default widget / design).
 *
 * Usage:
 *   <Recaptcha ref={recaptchaRef} onChange={setCaptchaToken} />
 *   // on submit send captchaToken to backend; then:
 *   recaptchaRef.current?.reset()
 */
const Recaptcha = forwardRef(({ onChange }, ref) => {
  const [value, setValue] = useState(null);
  const internalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      setValue(null);
      internalRef.current?.reset();
    },
    getValue: () => value,
  }));

  const handleChange = (v) => {
    setValue(v);
    onChange?.(v);
  };

  if (!SITE_KEY) {
    return (
      <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        VITE_RECAPTCHA_SITE_KEY is not set. Add it in .env and restart dev server.
      </div>
    );
  }

  return (
    <div className="my-2">
      <ReCAPTCHA
        ref={internalRef}
        sitekey={SITE_KEY}
        onChange={handleChange}
        onExpired={() => {
          setValue(null);
          onChange?.(null);
        }}
        onErrored={() => {
          setValue(null);
          onChange?.(null);
        }}
        theme="light"
        type="image"
      />
    </div>
  );
});

Recaptcha.displayName = "Recaptcha";
export default Recaptcha;
