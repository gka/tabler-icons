import * as React from "react";

const IconTarget = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-target" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={1} /><circle cx={12} cy={12} r={5} /><circle cx={12} cy={12} r={9} /></svg>;

export default IconTarget;