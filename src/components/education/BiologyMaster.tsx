import ExpandableDiv from '../ExpandableDiv';

const BiologyMaster = () => {
  return (
    <ExpandableDiv
      title='Master in Evolutionary and Behavioral Ecology'
      date='September 2014 - June 2019'
      id='biology-master'
    >
      <p>
        I got a master in Evolutionary and Behavioral Ecology from Gothenburg
        University. I did my master's thesis on parasite mediated sexual
        selection, which meant measuring the color saturation of the Southern
        Red Bishop's feathers and comparing that to it's parasite load. The
        courses I took are listed below.
      </p>

      <ul style={{ listStyle: 'circle', marginLeft: '-10px' }}>
        <li>Cellbiology</li>
        <li>Molecular Genetics</li>
        <li>Plant and Animal Physiology</li>
        <li>Ecology and Evolution</li>
        <li>Biodiversity and Systematics, basic and one-factor analysis</li>
        <li>Geoscience</li>
        <li>GIS</li>
        <li>Dynamic in natural populations</li>
        <li>Evolutionary biology</li>
        <li>Behavioral Biology</li>
        <li>Bioinformatics and functional genomics</li>
        <li>Evolutionary genomics</li>
      </ul>
    </ExpandableDiv>
  );
};

export default BiologyMaster;
