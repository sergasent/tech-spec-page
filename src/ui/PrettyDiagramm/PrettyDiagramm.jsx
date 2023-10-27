import './PrettyDiagramm.scss';

const PrettyDiagramm = () => {
  return (
    <div className="pretty-diagramm">
      <svg
        className="pretty-diagramm__figure"
        width="145"
        viewBox="0 0 160 160"
      >
        <circle r="76.2" cx="50%" cy="50%"></circle>
        <circle r="76.2" cx="50%" cy="50%"></circle>
        <circle r="64.5" cx="50%" cy="50%"></circle>
        <circle r="64.5" cx="50%" cy="50%"></circle>
      </svg>
    </div>
  );
};

export default PrettyDiagramm;
