import React from "react";
import Swal from "sweetalert2";
import pdf from "../../assets/pdf/converted_text.pdf";
import Title from "../common/title/Title";

const AllConversion = () => {
  // View Converted Text
  const viewText = () => {
    Swal.fire({
      title: "Converted Text",
      text: "No converted text found!",
      confirmButtonText: "Close",
    });
  };

  // View Question and Answer
  const viewQNA = () => {
    Swal.fire({
      title: "Question and Answer",
      html: "<ul><li>Answer of question 1</li><li>Answer of question 2</li><li>Answer of question 3</li><li>Answer of question 4</li><li>Answer of question 5</li></ul>",
      confirmButtonText: "Close",
    });
  };

  return (
    <>
      <Title title="All Conversion" />
      <div className="allConversion">
        <table>
          <tr>
            <th>ID</th>
            <th>Audio</th>
            <th>Text</th>
            <th>Download Text</th>
            <th>QNA</th>
            <th>Download Ans</th>
            <th>Date and Time</th>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td>CONV-20240910-0001</td>
            <td>
              <audio controls>
                <source
                  src="../../assets/audio/Kontroll.ogg"
                  type="audio/ogg"
                ></source>
                <source
                  src="../../assets/audio/Kontroll.mp3"
                  type="audio/mpeg"
                ></source>
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <button className="btn-primary" onClick={viewText}>
                View Text
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>
              <button className="btn-primary" onClick={viewQNA}>
                QNA
              </button>
            </td>
            <td>
              <a href={pdf} className="btn-primary" download>
                Download
              </a>
            </td>
            <td>9/10/2024, 11:15:07 AM</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <button className="btn-disable">Previous</button>
            </td>
            <td className="text-center">
              <button className="btn-secondary">1</button>
            </td>
            <td colSpan={3} className="text-right">
              <button className="btn-disable">Next</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default AllConversion;
