package mock1.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mock1.Entity.Info;

public interface InfoRepositoryb extends JpaRepository<Info, Integer> {
	public List<Info> findBylastnameContaining(String lastname);
}

