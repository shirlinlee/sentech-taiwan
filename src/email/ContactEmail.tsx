type ContactEmailProps = {
    category: string;
    subject: string;
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  
  export default function ContactEmail({
    category,
    subject,
    name,
    email,
    phone,
    message,
  }: ContactEmailProps) {
    return (
      <div
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#333",
          lineHeight: 1.6,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            borderBottom: "2px solid #f58220",
            paddingBottom: "12px",
          }}
        >
        諮詢申請
        </h2>
  
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr>
              <td style={labelStyle}>分類</td>
              <td style={valueStyle}>{category}</td>
            </tr>
  
            <tr>
              <td style={labelStyle}>主旨</td>
              <td style={valueStyle}>{subject}</td>
            </tr>
  
            <tr>
              <td style={labelStyle}>姓名</td>
              <td style={valueStyle}>{name}</td>
            </tr>
  
            <tr>
              <td style={labelStyle}>Email</td>
              <td style={valueStyle}>{email}</td>
            </tr>
  
            <tr>
              <td style={labelStyle}>電話</td>
              <td style={valueStyle}>{phone}</td>
            </tr>
  
            <tr>
              <td style={labelStyle}>訊息</td>
              <td
                style={{
                  ...valueStyle,
                  whiteSpace: "pre-wrap",
                }}
              >
                {message}
              </td>
            </tr>
          </tbody>
        </table>
  
        <hr
          style={{
            margin: "32px 0",
            border: 0,
            borderTop: "1px solid #ddd",
          }}
        />
  
        <p
          style={{
            fontSize: "12px",
            color: "#888",
          }}
        >
          This email was automatically sent from the SENTECH Taiwan website.
        </p>
      </div>
    );
  }
  
  const labelStyle = {
    width: "140px",
    fontWeight: 600,
    padding: "12px 0",
    verticalAlign: "top" as const,
  };
  
  const valueStyle = {
    padding: "12px 0",
  };