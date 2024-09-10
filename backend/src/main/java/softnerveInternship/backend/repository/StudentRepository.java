package softnerveInternship.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;

import softnerveInternship.backend.entity.Student;

public interface StudentRepository extends MongoRepository<Student,Long> {

	Student findById(int id);

	void deleteById(int id);


}
