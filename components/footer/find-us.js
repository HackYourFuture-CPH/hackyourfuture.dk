const FindUs = () => (
  <div style={{ textAlign: 'center' }}>
    <div className="contentExtra">
      <h2>Find us on Social Media</h2>
      <div className="facebook">
        {/*language=CSS*/}
        <style jsx>{`
          @media (max-width: 768px) {
            iframe {
              width: 300px;
            }
          }
        `}</style>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackyourfuturecopenhagen%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=452614524799595"
          width="340"
          height="214"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
        />
      </div>
    </div>
  </div>
)
export default FindUs