DROP TABLE IF EXISTS houses;

CREATE TABLE houses
(
  id SERIAL PRIMARY KEY,
  name text,
  address VARCHAR(64),
  city text,
  state text,
  zip integer
);

INSERT INTO houses
(name, address, city, state, zip)
VALUES
('Example1', '123 Example St', 'The City of Example', 'EX', 12345),
('Example2', '456 Example Way', 'Examplous', 'XE', 54321),
('Example3', '7890 Example Cir', 'Exemplar', 'IE', 13579);



