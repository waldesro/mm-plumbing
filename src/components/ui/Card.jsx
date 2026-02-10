export const Card = ({ className = "", ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm 
                  hover:shadow-md transition-shadow
                  ${className}`}
      {...props}
    />
  );
};

export const CardHeader = ({ className = "", ...props }) => {
  return (
    <div
      className={`p-6 border-b border-slate-100 
                  bg-linear-to-r from-white to-[#14608D]/5
                  ${className}`}
      {...props}
    />
  );
};

export const CardTitle = ({ className = "", ...props }) => {
  return (
    <h3
      className={`text-lg font-semibold text-slate-900 
                  ${className}`}
      {...props}
    />
  );
};

export const CardContent = ({ className = "", ...props }) => {
  return (
    <div
      className={`px-6 pb-6 text-slate-700 
                  ${className}`}
      {...props}
    />
  );
};
